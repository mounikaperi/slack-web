import React from 'react'
import '../css/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import ForumIcon from '@mui/icons-material/Forum';
import DraftsIcon from '@mui/icons-material/Drafts';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <div className="sidebar__text">
            <button>
              <span class="button__text">FullStack Developers Workspace</span>
              <span><ExpandMoreIcon/></span>
            </button>
              <span><MapsUgcSharpIcon className="sidebar__headericon"/></span>
          </div>
          <div className="sidebar__onlinestatus">
            <FiberManualRecordIcon style={{color: 'green'}}/>
            <span>Sai Mounika Peri</span>
          </div>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption Icon={SortIcon} title="Unreads"></SidebarOption>
      <SidebarOption Icon={ForumIcon} title="Direct Messages"></SidebarOption>
      <SidebarOption Icon={AlternateEmailOutlinedIcon} title="Mentions & reactions"></SidebarOption>
      <SidebarOption Icon={BookmarkBorderIcon} title="Later"></SidebarOption>
      <SidebarOption Icon={ManageSearchIcon} title="All Channels"></SidebarOption>
      <SidebarOption Icon={GroupIcon} title="People & User groups"></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title="Drafts & sent"></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title="Files"></SidebarOption>
      <SidebarOption Icon={MoreVertIcon} title="Show less"></SidebarOption>
      <hr />
      <SidebarOption Icon={MoreVertIcon} title="Show less"></SidebarOption>
      <SidebarOption Icon={MoreVertIcon} title="Show less"></SidebarOption>
    </div>
  )
}

export default Sidebar