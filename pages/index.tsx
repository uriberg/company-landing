import React from 'react';
import About from "../components/about";
import Chance from 'chance';
import Staff from "../components/staff";
const chance = new Chance();

interface HomeProps {
    staff: []
}

class Home extends React.Component<HomeProps> {

    static async getInitialProps() {
        const data = await fetch('https://raw.githubusercontent.com/fintekapps/react-site/master/data/staff.json');
        const res = await data.json();
        const uniques = chance.unique(chance.natural, 6, {min: 0, max: res.length - 1});
        let staff = [];
        for(let i = 0; i < uniques.length; i++){
            staff.push(res[uniques[i]]);
        }
        //console.log(res);
        console.log(staff);
        return {staff: staff};
    }

  render() {

    return (
        <>
          <div className="aboutSection">
              <About/>
          </div>
            <div className="staffSection">
                <Staff data={this.props.staff}/>
            </div>
        </>
    )
  }
}

export default Home;
