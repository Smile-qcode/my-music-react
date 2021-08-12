import React, { memo } from 'react';
import { headerLinks } from '@/common/local-data.js'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style.js';

export default memo(function MyAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className="header-item"
          activeClassName="link-active"
        >
          <em>{item.title}</em>
          <i className="icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <h1>
            <a href="#/" className="logo sprite_01">
              网易云音乐
            </a>
          </h1>
          <div className="header-group">
            {headerLinks.map((item, index) => {
              return showSelectItem(item, index);
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight></div>
      <div className='div-speartor'></div>
    </HeaderWrapper>
  )
})
