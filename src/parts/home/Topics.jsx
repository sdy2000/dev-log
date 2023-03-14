import React from 'react'
import { Aside, TopicButton } from '../../components'
import { IoAccessibilityOutline, IoRocketOutline, IoServerOutline } from 'react-icons/io5'

const Topics = () => {
  return (
    <Aside title={'Topics'}>
      <div>
        <TopicButton topicName={'Database'} topicIcon={<IoServerOutline />} />
        <TopicButton topicName={'Accessibility'} topicIcon={<IoAccessibilityOutline />} />
        <TopicButton topicName={'Web Performance'} topicIcon={<IoRocketOutline />} />
      </div>
    </Aside>
  )
}

export default Topics