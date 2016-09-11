// Dashboard summary is the component above the two columns in the dashboard
import React from 'react';

class DashboardSummary extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='clearfix dashboardSummary'>
        <div className='dashboardSummaryProf'>
          <img src='http://yadayadacreative.com/CDA/biology.jpg' alt='' />
          <h3>{this.props.data.details.name} </h3>
          <a className='button'>Edit Class</a>
        </div>
        <div className='dashboardSummaryStats clearfix'>
          <div>
            <p>84</p>
            <h5>Class Average</h5>
          </div>
          <div>
            <p> {this.props.data.students.length}</p>
            <h5>Number of Students</h5>
          </div>
          <div>
            <p>134</p>
            <h5># of School Something</h5>
          </div>
        </div>
      </div>
    )
  }
}
export default DashboardSummary
