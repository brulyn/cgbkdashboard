import React, { PureComponent } from 'react';

class Sidebar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h5><i className="fas fa-tachometer-alt"></i> Dashboard</h5>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="#"><i className="fas fa-university"></i> Home</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-code-branch"></i> Branches</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#"><i className="fas fa-info-circle"></i> Accounts Info</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-dollar-sign"></i> Assets and Liabilities</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-credit-card"></i> E-banking</a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </nav>);
    }
}

export default Sidebar;