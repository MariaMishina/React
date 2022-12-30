import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Button} from './Button'

describe('testing Button', () => {
  it('render component Button', () => {
    render(<Button>Open</Button>)
  })

  it('render with snapshot', () => {
   const {asFragment} = render(<Button>Open</Button>)
   expect(asFragment()).toMatchSnapshot()
  })

  it('render component with text name button', () => {
    render(<Button>Open</Button>)
    expect(screen.getByText(/Open/)).toBeInTheDocument()
  })

  it('render multiply component', () => {
    render(
      <>
        <Button>Click</Button>
        <Button>Clack</Button>
      </>
    )
    expect(screen.queryAllByRole('button').length).toBe(2)
  })

  it('button is disable', () => {
    render(<Button disabled>Open</Button>)
    expect(screen.getByText(/Open/)).toBeDisabled()
  })

  it('button have style color black', () => {
    render(<Button>Open</Button>)
    expect(screen.getByText(/Open/)).toHaveStyle({color: 'black'})
  })

  it('button click wwith userEvent', async () => {
    const mockHandler = jest.fn()

    render(<Button click={mockHandler}>Open</Button>)
    await userEvent.click(screen.getByText(/Open/))
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('test example', async () => {
    const onChange = jest.fn()
    render(<input type="checkbox" onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')
    await userEvent.dblClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
  })
  
  
})