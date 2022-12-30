import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {MessageList} from './MessageList'

describe('testing MessageList', () => {

    it('render component MessageList', () => {
        render(<MessageList messages={[]}/>)
      })
      it('render with snapshot', () => {
        const {asFragment} = render(<MessageList messages={[]}/>)
        expect(asFragment()).toMatchSnapshot()
       })
})