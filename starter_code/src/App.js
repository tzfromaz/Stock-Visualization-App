import React from 'react';
import Title from './components/Title';
import Card from './components/Card';
import CardForm from './components/CardForm';
import LineChart from './components/LineChart';
import JohnData from './data/john_posts.json';
import JaneData from './data/jane_posts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          company: 'Sample Company',
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(company, startDate, endDate) {
    const newCard = {company: company, startDate: startDate, endDate: endDate};
    const cards = [...this.state.cards, newCard];
    this.setState({cards: cards});
  }
  
  render() {
    const cards = this.state.cards.map((card, index) => (
      <Card company={card.company}
        key={index}
        startDate={card.startDate}
        endDate={card.endDate} />
    ));

    return (
      <div>
        <div id='app-body'>
          <LineChart dataOne={JohnData.data} dataTwo={JaneData.data} />
          <div id='left-panel'>          
            <CardForm onSubmit={this.handleSubmit} />
          </div>
        </div>     
      </div>
    );
  }
}

export default App;
