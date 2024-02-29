import { Component } from 'react';
import { Form, Header, Input, SearchFormButton, Span } from './SearchBar.styled';
import { MdSearch } from 'react-icons/md';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return Notify.warning(
          'Sorry, enter your query in the search field.'
        );
    } else {
      this.props.onSubmit(this.state.searchQuery);
    }
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="searchInput">
            <SearchFormButton type="submit">
              <MdSearch size="24" />
              <Span>Search</Span>
            </SearchFormButton>
          </label>

          <Input
            id="searchInput"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleSearch}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}