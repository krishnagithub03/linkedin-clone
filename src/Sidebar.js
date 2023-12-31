import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const Sidebar = () => {
  const user  = useSelector(selectUser);
    const recentItem = (topic)=>{
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>);
    }
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1531265726475-52ad60219627?auto=format&fit=crop&q=80&w=1791&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar' >{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
         <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,543</p>
         </div>
         <div className="sidebar__stat">
         <p>Views on post</p>
            <p className='sidebar__statNumber'>253</p>
         </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('React js')}
        {recentItem('Artificial Intelligence')}
        {recentItem('Machine Learning')}
        {recentItem('Android')}
        {recentItem('Networking')}
      </div>
    </div>
  )
}

export default Sidebar
