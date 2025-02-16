
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@headlessui/react';
import { FeedbackTypeStep } from './FeedbackTypeStep';

export default {
  title: 'Widget UI/FeedbackTypeStep',
  component: FeedbackTypeStep,
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
} as Meta

export const Default: StoryObj = {
  args: {
    image: { src: 'https://via.placeholder.com/150', alt: 'Imagem de teste' },
    text: 'Exemplo de feedback',
  },
}