import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getCurrentUser } from '../../stores/user';

function Dashboard() {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
        }
    }, []);

    function RenderLoginLogout() {
        if(currentUser) {
            return (
                <div className="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/profile" class="nav-link">
                            {currentUser.username }
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/logout" class="nav-link">
                            登出
                        </Link>
                    </li>
                </div>
            )
        } else {
            return (
                <div className="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">
                            登入
                        </Link>
                    </li>
                </div>
            )
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: '#231917', color: 'white', height: '80' + 'px'}}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand brand" to="/">
                    清華大學藝術中心後台
                </Link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

                <div className="navbar-nav">
                    <li class="nav-item">
                        <Link to="/admin/exhibitions" class="nav-link">
                            展覽
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/admin/exhibitions" class="nav-link">
                            公告
                        </Link>
                    </li>
                </div>

                <RenderLoginLogout></RenderLoginLogout>

                
                
                </div>
            </div>
        </nav>
    )
}

export default Dashboard;