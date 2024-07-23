import BlogItem from '../BlogItem'

import './index.css'

const UserInfo = props => {
  const {blogsList} = props

  return (
    <div className="user-info-container">
      <div className="profile-pic-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-pic"
        />
      </div>
      <h1 className="profile-name">Wade Warren</h1>
      <p className="profile-paragraph">Software developer at UK</p>

      <ul className="blog-list-container">
        {blogsList.map(blog => (
          <BlogItem key={blog.id} blogDetails={blog} />
        ))}
      </ul>
    </div>
  )
}
export default UserInfo
