import React, { useEffect, useState } from 'react';
import Layout from '../../common/AdminLayout';
import Header from '../../common/AdminHeader';
import { Link, useHistory } from "react-router-dom";

import { deleteExhibition, fetchExhibitions, fetchExhibitionsByType } from '../../stores/exhibition';
import { getCurrentUser, logout } from '../../stores/user';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { Alert } from '@material-ui/lab';

function Exhibition() {
    let history = useHistory();
    const [exhibitions, setExhibitions] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [page, setPage] = useState(1);
    const [maxSize, setMaxSize] = useState(1);
    const [message, setMessage] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);

    async function fetchData() {
        const res = await fetchExhibitions(1, 9)
        res
          .json()
          .then(res => {
            setMaxSize(res.max_size)
            setExhibitions(res.data)
          })
          .catch(err => setErrors(err));
    }

    async function handleDelete(id) {
        try {
            let isDel = window.confirm("刪除?");
            console.log(isDel)
            if(!isDel) return;
            await deleteExhibition(id);
            
            setMessage("刪除成功");
            window.location.reload();
        } catch(err) {
            if(err.response.status === 401) {
                setMessage("閒置太久，請重新登入")
                setTimeout(()=>{
                    logout();
                    history.push("/login");
                    window.location.reload();
                }, 5000);
                
            }
        }
    }

    function handleEdit(id) {
        history.push(`/admin/exhibitions/edit/${id}`);
        window.location.reload();
    }

    useEffect(() => {
        fetchData();
        const user = getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
        }
  
    }, []);


  return (
    <Layout>
        <Header></Header>
        {message && (
                    <Alert severity="error">{message}</Alert>
                )}
        <div className="container-fluid">
            <div className="d-flex mb-3">
                <h2>展覽</h2>
                { currentUser ? (
                    <Link to="/admin/exhibitions/create">
                        <Button
                            variant="contained"
                            color="primary"
                            className="ml-3"
                            startIcon={<AddCircleOutlineIcon />}
                        >新增
                        </Button>
                    </Link>

                ) : (
                    <></>
                )
                    
                }
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >標題</TableCell>
                        <TableCell >開始日期</TableCell>
                        <TableCell >類型</TableCell>
                        <TableCell >操作</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { exhibitions && exhibitions.map((exhibition) => (
                        <TableRow key={exhibition.name}>
                        <TableCell component="th" scope="row">
                            {exhibition.title}
                        </TableCell>
                        <TableCell >{exhibition.start_date}</TableCell>
                        <TableCell >{exhibition.type}</TableCell>
                        
                            {currentUser ? (
                                <TableCell >
                                    <Button
                                        variant="contained"
                                        color="default"
                                        className="mr-2"
                                        startIcon={<EditIcon />}
                                        onClick={() => {handleEdit(exhibition.id)}}
                                    >修改
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => { handleDelete(exhibition.id)}}
                                    >刪除
                                    </Button>
                                </TableCell>
                            ) : (
                                
                                <TableCell >

                                </TableCell>
                            )}
                            
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    </Layout>
  )
      
    
}

export default Exhibition;