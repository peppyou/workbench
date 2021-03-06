import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './App.css';

export default () => (
  <footer className="footer">
    <div className="container">
       <div class="small-print">
            <div class="container">
                <span class="pull-left">
       	            <p><copyright>&copy; 2018 Archemy, Inc. or its affiliates</copyright></p>
                </span>
            </div>
        </div>
    </div>
  </footer>
);