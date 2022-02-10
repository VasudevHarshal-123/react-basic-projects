import React from 'react';
import "./styles/ResumeDownload.css";
import { RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ResumeDownload(props) {
  return (
    <div className="resume-download-wrapper">
        <div>
          <RollbackOutlined />
          <Link className="resume-go-back" to="/">Back</Link>
        </div>
        {window.innerWidth> 660 ? <h1>Please Press CTRL+P/Cmd+P to download as PDF.</h1>: <p>Tap on vertical 3 - dots icon for options --{">"} Select the Share… option from the list--{">"} Select the Printer to Save as PDF and view Print Preview.</p>}
    </div>
  )
}

export default ResumeDownload;