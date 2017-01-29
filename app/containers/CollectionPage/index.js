/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import messages from './messages';
import { KYCheckBox, BSCheckBox } from 'components/CheckBox';
import A from 'components/A';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';

export default class CollectionPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleOnChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Collection Page"
          meta={[
            { name: 'description', content: 'Collection of UI / UX elements from famous site e.g. Facebook, twitter, etc..' },
          ]}
        />
        <H1>
          <A href="https://kyusuf.com/post/completely-css-custom-checkbox-radio-buttons-and-select-boxes"><FormattedMessage {...messages.KYusufCheckBox} /></A>
        </H1>
        <KYCheckBox label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <H1>
          Bootstrap Style
        </H1>
        <BSCheckBox color="info" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <BSCheckBox color="primary" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <BSCheckBox color="secondary" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <BSCheckBox color="success" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <BSCheckBox color="warning" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
        <BSCheckBox color="danger" label="Fancy Checkbox" onChange={this.handleOnChange} type="checkbox" checked={this.state.checked} />
      </div>
    );
  }
}
