import { Icon } from '@material-ui/core'
import React from 'react'
import './sidebarRow.css'

function SidebarRow({title,Icon,selected}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className={'sidebarRow__icon'}/>
            <h2 className='sidebarRow__title'>{title}</h2>
            {/* 1:41:26 */}
        </div>
    )
}

export default SidebarRow
