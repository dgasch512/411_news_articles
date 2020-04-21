import React, { Component } from 'react'

class List extends Component {
    // write componentDidMount function
    componentDidMount() {
        this.props.fetchArticles()
    }
    // call "this.props.fetchArticles"

    render() {
        return (
            <div>
                {this.props.articles.map(a => {
                    return <p>{a.title}</p>
                })}
            </div>
        )
    }
}

export default List