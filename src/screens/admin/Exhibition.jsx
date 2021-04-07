import React, { useEffect, useState } from 'react';
import Layout from '../../common/AdminLayout';
import Header from '../../common/AdminHeader';
import { Link } from "react-router-dom";

import { fetchExhibitions, fetchExhibitionsByType } from '../../stores/exhibition';
import { getCurrentUser } from '../../stores/user';

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

function Exhibition() {
    const [exhibitions, setExhibitions] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [page, setPage] = useState(1);
    const [maxSize, setMaxSize] = useState(1);
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
                    {exhibitions.map((exhibition) => (
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
                                    >修改
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
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