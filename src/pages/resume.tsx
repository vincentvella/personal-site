import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import { Grid } from '@material-ui/core';
import ResumeDocument from '../components/resume';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.delay = 250;
    this.timeout = false;
    this.documentGrid = React.createRef();
    this.updateWidth = this.updateWidth.bind(this);
    this.debounceResizeRequests = this.debounceResizeRequests.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.debounceResizeRequests);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResizeRequests);
  }

  debounceResizeRequests() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateWidth, this.delay);
  }

  updateWidth() {
    const width = this.documentGrid.current.clientWidth <= 1280 ? this.documentGrid.current.clientWidth - 25 : 1260;
    this.setState({ width });
  }

  render() {
    const { width } = this.state;
    const contentScreens = get(this.props, 'data.allMarkdownRemark.edges', []);
    return (
      <div ref={this.documentGrid}>
        <DefaultLayout drawerProps={contentScreens}>
          <Grid container spacing={0} direction="column" alignItems="center">
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <ResumeDocument width={width} path={this.props.data.file.publicURL} />
            </Grid>
          </Grid>
        </DefaultLayout>
      </div>
    );
  }
}

export default Resume;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "resume/Resume.pdf" }) {
      id
      publicURL
    }
    markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
      frontmatter {
        title
        subtitle
        path
        body
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "content" } } }, sort: { fields: frontmatter___title }) {
      edges {
        node {
          id
          frontmatter {
            body
            path
            subtitle
            title
            type
          }
        }
      }
    }
  }
`;
