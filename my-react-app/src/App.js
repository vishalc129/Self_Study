import { Component } from 'react';
import LikeDislikeButtonComponent from './Components/LikeDislikeButtonComponent'
import TalentFinderComponent from './Components/TalentFinder';
import TodoList from './Components/TodoList';

export default class App extends Component {
  render() {
    return (
      <>
        <LikeDislikeButtonComponent></LikeDislikeButtonComponent>
        <TalentFinderComponent></TalentFinderComponent>
        <TodoList></TodoList>
      </>
    );
  }
}
