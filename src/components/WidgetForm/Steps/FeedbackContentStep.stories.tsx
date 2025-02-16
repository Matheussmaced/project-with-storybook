
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@headlessui/react';
import { FeedbackContentStep, FeedbackContentStepProps } from './FeedbackContentStep';
import { feedbackTypes } from '..';


export default {
  title: 'Widget UI/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA'
  },
  argTypes: { // como meus argumentos irão ser modificados ou não la no storybook
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      )
    }
  ] // contexto para o componente funcionar (Se ele depender de informações externas para funcionar)
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG'
  }
}
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA'
  }
}
export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER'
  }
}