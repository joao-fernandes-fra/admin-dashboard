import { ReactElement, useState } from 'react';
import { SidebarOptions } from '../SideBar/sidebar.options';
import "./index.css";


const OptionsBar = (options: SidebarOptions) => {
  const topicMap = new Map()
  options.topics?.forEach(topic => {
    topicMap.set(topic.title, useState(false))
  })
  const toggleActive = (title: string) => {

    topicMap.forEach((topic, state) => {
      const [active, setActive] = state
      if (title === topic) {
        setActive(!active)
      } else setActive(false)
    });
  }

  const isActive = (title:string) => {
    const state = topicMap.get(title)
    return state && state?.[0]
  }
  return (
    <div className={`options-bar shadow-lg ${options.optionsEnabled ? 'scale-100': 'scale-0'}`}>
      <OptionsBlock title={options.title as string} />
      <div className='topics-container'>
        {options.topics?.map(topic => {
          return (
            <div className='topic-title' onClick={() => toggleActive(topic.title)} key={topic.title}>
              <div className='topic-header-icon'>
                {topic.icon}
              </div>
              <h6 className={isActive(topic.title) ? 'topic-title-text-selected' : 'topic-title-text'}>
                {topic.title}
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  );
};

declare type TopicParams = {
  header: string,
  icon: ReactElement
}

declare type OptionsBlockParams = {
  title: string
}

const OptionsBlock = (params: OptionsBlockParams) => (
  <div className='options-block'>
    <h5 className='options-block-text'>{params.title}</h5>
  </div>
);

export default OptionsBar;