import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {Paper} from "@mui/material";

function UserDetails() {
    return (
        <div className="userDetails">
            <form>
                <div>
                    <label>
                        User Name
                    </label>

                </div>
                <div>

                    <label>
                        User Email
                    </label>
                </div>
                <div>
                    <label>
                        User Phone
                    </label>

                </div>
            </form>

        </div>
    )
}

export default UserDetails
