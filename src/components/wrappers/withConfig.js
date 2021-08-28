import React from 'react'

const withConfig = WrappedComponent => {
    return class extends React.Component {
        state = {
                config: window.$config,
            }
        
        render() {
            return (
                <WrappedComponent config={this.state.config} {...this.props} />
            )
        }
    }
}

export default withConfig
