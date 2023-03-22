import styles from '../styles/home.module.css';
import PropTypes from 'prop-types';
import Comment from '../components/Comments';
import { Loader } from '../components';
import { useEffect, useState } from 'react';
import {getPosts} from '../api/index';
const Home = () => {
    const [posts , setPosts] = useState([]);
    const [loading , setLoading] = useState(true);  

    useEffect(() => {

        const fetchPosts = async () => {
          const response  = await getPosts();
          console.log(response);
          if(response.success){
            setPosts(response.data.posts);
          }
          setLoading(false);
    
        }
        fetchPosts();
      } , [])

      if(loading){
        return <Loader/>
      }

    return (
        <div className={styles.postList}>
            {posts.map((post)=>(
                <div className={styles.postWrapper} key = {`posts-${post._id}`}>
                <div className={styles.postHeader}>
                    <div className={styles.postAvatar}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                            alt="user-pic"
                        />
                        <div>
                            <span className={styles.postAuthor}>{post.user.name}</span>
                            <span className={styles.postTime}>a minute ago</span>
                        </div>
                    </div>
                    <div className={styles.postContent}>{post.content}</div>
                    <div className={styles.postActions}>
                        <div className={styles.postLike}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                                alt="likes-icon"
                            />
                            <span>5</span>
                        </div>
                        <div className = {styles.postCommentsIcon}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                                alt="comments-icon"
                            />
                            <span>2</span>
                        </div>
                    </div>
                    <div className={styles.postCommentBox}>
                        <input placeholder="Start typing a comment"/>
                    </div>
                    <div className={styles.postCommentsList}>
                        {post.comments.map((comment)=>(
                            <Comment comment = {comment}/>
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
Home.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Home;