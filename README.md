# Documentação do Estudo com Storybook

Este repositório contém arquivos que utilizei para estudar e documentar componentes de um projeto de terceiros utilizando **Storybook**. O objetivo foi entender melhor a documentação e visualização de componentes isoladamente.

## O que é o Storybook?

O **Storybook** é uma ferramenta que permite desenvolver componentes de forma isolada, possibilitando a documentação e testes de diferentes estados e variações sem a necessidade de rodar toda a aplicação.

## Estrutura dos Arquivos

Os arquivos estudados documentam diferentes etapas de um sistema de feedback.

### **FeedbackContentStep**

Arquivo: `FeedbackContentStep.stories.tsx`

```tsx
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@headlessui/react';
import { FeedbackContentStep, FeedbackContentStepProps } from './FeedbackContentStep';
import { feedbackTypes } from '..';
import { http, HttpResponse } from 'msw';

export default {
  title: 'Widget UI/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA'
  },
  parameters: {
    msw: {
      handlers: [
        http.post('/feedbacks', () => HttpResponse.json({ success: true }))
      ]
    }
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => (
      <Popover>
        <Popover.Panel static>
          <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
            {Story()}
          </div>
        </Popover.Panel>
      </Popover>
    )
  ]
} as Meta<FeedbackContentStepProps>;
```

- Define histórias para o componente `FeedbackContentStep`.
- Utiliza `args` para definir propriedades iniciais dos componentes.
- Implementa **Mock Service Worker (msw)** para simular uma requisição HTTP ao enviar feedback.
- Usa `argTypes` para controlar a seleção dos tipos de feedback.
- Implementa um `decorator` com `Popover` para fornecer contexto ao componente.
- Exporta diferentes variações (`Bug`, `Idea`, `Other`) representando os tipos de feedback.

### **FeedbackSuccessStep**

Arquivo: `FeedbackSuccessStep.stories.tsx`

```tsx
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@headlessui/react';
import { FeedbackSuccessStep } from './FeedbackSuccessStep';

export default {
  title: 'Widget UI/FeedbackSucessStep',
  component: FeedbackSuccessStep,
  decorators: [
    (Story) => (
      <Popover>
        <Popover.Panel static>
          <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
            {Story()}
          </div>
        </Popover.Panel>
      </Popover>
    )
  ]
} as Meta;
```

- Documenta a etapa de sucesso do feedback.
- Utiliza um `decorator` para garantir que o componente seja renderizado corretamente dentro do `Popover`.
- Exporta uma única história chamada `Default`.

### **Loading**

Arquivo: `Loading.stories.tsx`

```tsx
import { Loading } from "./Loading";
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

export const Default: StoryObj = {};
```

- Documenta o componente de loading da aplicação.
- Simplesmente exporta a história `Default`, sem argumentos adicionais.

## Aprendizados

Durante este estudo, aprendi:

- Como estruturar histórias no Storybook usando `Meta` e `StoryObj`.
- Como configurar `args` e `argTypes` para controlar a personalização dos componentes.
- Como utilizar **Mock Service Worker (msw)** para simular respostas de API nos testes.
- A importância de `decorators` para fornecer contexto ao componente quando necessário.

## Conclusão

Storybook se mostrou uma ferramenta poderosa para documentar e testar componentes de forma isolada. A experiência ajudou a entender como estruturar histórias de componentes reutilizáveis e interativos.

---
Caso tenha alguma sugestão ou queira discutir sobre Storybook, fique à vontade para entrar em contato!
