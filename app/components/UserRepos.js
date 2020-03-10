var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var UserRepos = createReactClass({
    getInitialState: function(){
       return {
           reposCount:0,
       }
    },
    componentWillReceiveProps: function(props) {
       this.setState({reposCount: props.repos.length});
    },
    render: function () {
      var repos = this.props.repos.map(function (repo, key) {
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3> {UserRepos.name}
                            <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} className="btn btn-primary" role="button">Repositório</a>
                            <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues({repo.open_issues})</a>
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <h2>{this.state.reposCount}</h2>
                {repos}
            </div>
        );
    }
});

module.exports = UserRepos;