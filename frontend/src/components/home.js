import React, { Fragment } from 'react';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import { Container, List , Grid } from 'semantic-ui-react'
import Loading from './loading/loading';
import PostCard from './posts/post_card';
import './home.style.css';

class Home extends React.Component {

    state = {
        loading: false
    }

    componentDidMount() {
        this.props.getPosts("hey");
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.log(nextProps.posts.loading)
            this.setState({
                loading: nextProps.posts.loading
            });

        }

    }

    render() {
        const { loading } = this.state
        const { allPosts } = this.props.posts
        console.log(loading)
        return (
            <Container>
                <NavBar />
                <div className="post-div">
                {
                    loading ? (
                        <Fragment>
                            <div className="loading">
                                <Loading loading={loading} type={"ball"} />
                            </div>
                        </Fragment>
                    ) : (
  
                            <Fragment>
                                <List> 
                                    


                            {
                                allPosts.map(post =>(
                                    <List.Item className="post-item" key={post._id}>
                                    <PostCard
                                     
                                    title={post.title}
                                    body = {post.body}
                                     />
                                     </List.Item>
                                     
                                ))
                            }
                            </List>
                            
                        </Fragment>


                    )
                }

                </div>
               

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts

});



export default connect(
    mapStateToProps,
    { getPosts }
)(Home);