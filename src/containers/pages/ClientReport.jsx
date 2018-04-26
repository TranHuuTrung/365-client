import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';
import propsTypes from 'prop-types';

import { ClientReportItem } from '../../components/elements';


class ClientReport extends Component {
    static props = {
        clientReport: propsTypes.object,
      }
    
      static defaultProp = {
        clientReport: [],
      }
    
      state = {
        isAllChecked: false,
      };
    
      componentDidMount = () => {
        this.props.actions.getClientReport();
      }

      deleteAllBlog = (blogId) => {
        let dais = this.props.myBlogs.filter((c) => {
          return c.checked;
        })
        let itemsProcessed = 0;
        dais.forEach(item => {
          this.props.actions.deleteBlog(item._id)
            .then(() => {
              itemsProcessed++;
              if (itemsProcessed === dais.length) {
                this.props.actions.getClientReport(this.props.auth.user);
              }
            });
        })
      }
    
      selectAll = (event) => {
          this.props.myBlogs.map( (item) => { 
          item.checked = event.target.checked 
        })
        this.setState({ isAllChecked: event.target.checked  })
      }
      
      handleChange = (index) => {
        this.props.myBlogs[index].checked = !this.props.myBlogs[index].checked;
        let dais = this.props.myBlogs.filter( (c) => {
          return c.checked;
        }).length;
        if (dais === this.props.myBlogs.length) this.setState({ isAllChecked: true }) 
        else this.setState({ isAllChecked: false });
      }

    render() {
        const { clientReport } = this.props;
        return (
            <div className="push-30-t push-30 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 user-profile">
                <div className="block-container blog-page-close-container mt0 mb0">
                    <div className="list-checkbox">
                        <ul className="list">
                            <li className="item">
                                <div className="checkbox-custom">
                                    <input type="checkbox"
                                        id="selectorAll"
                                        name="selectorAll"
                                        onClick={this.selectAll}
                                        checked={this.state.isAllChecked} />
                                    <label className="checkbox-label" htmlFor="selectorAll">&nbsp;</label>
                                    <div className="check"></div>
                                </div>
                                <div className="content">
                                    <span className="title">全選択/全解除</span>
                                </div>
                            </li>
                            {
                                clientReport.map((item, key) =>
                                    <ClientReportItem
                                        key={key}
                                        data={item}
                                        checked={item.checked}
                                        updateCheck={() => this.handleChange(key)}
                                        updateBlog={() => this.setUpdatingBlogId(item._id, item.blog_title, item.blog_description)} />
                                )
                            }
                        </ul>
                    </div>
                    <div className="footer-bar text-right" onClick={this.deleteAllBlog} >
                        <a className="button-link">削除する</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    clientReport: state.report.report || [],
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientReport);

