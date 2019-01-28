import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import './index.scss'

export default class NavigatorBtn extends Component {
  handleGoto (parent, name) {
    Taro.navigateTo({
      url: `/pages/${parent.toLowerCase()}/${name.toLowerCase()}/index`
    })
  }

  render () {
    const { parent, name } = this.props

    return (
      <View
        className='demo-goto-btn'
        onClick={this.handleGoto.bind(this, parent, name)}
      >查看详情</View>
    )
  }
}

NavigatorBtn.defaultProps = {
  parent: '',
  name: '',
}

NavigatorBtn.propTypes = {
  parent: PropTypes.string,
  name: PropTypes.string,
}
