import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends React.Component {

    static defaultProps = {
        onSubmit: (...args) => console.warn('onSubmit not bound. Defaulting to nothing. Args:', args)
    };
    
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        };

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchInputChange(e) {
        const { value } = e.target;
        this.setState({ searchInput: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.searchInput);
        this.setState({searchInput: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-container">
                    <a className="search-icon-btn" onClick={this.handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <div className="search-input">
                        <input type="search" className="search-bar" placeholder="Search Term" value={this.state.searchInput} onChange={this.handleSearchInputChange} />
                    </div>
                </div>
            </form>
        );
    }
}