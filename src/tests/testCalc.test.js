import {mount} from '@vue/test-utils'
import Calculator from '../components/Calculator'

describe('Caclulator test inputs',()=>{
    it('Test operand 1 input value', async()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    })
    it('Test operand 2 input value', async()=>{
        const wrapper = mount(Calculator)
        const operand2Input= wrapper.find('input[name=operand2]')
        operand2Input.setValue('1')
        expect(wrapper.vm.operand2).toBe(1)
    })
})

describe('Calculator operation tests',()=>{
    it('Test sum operation', async ()=>{
        
        const wrapper = mount(Calculator)

        const operand1Input= wrapper.find('input[name=operand1]')
        await  operand1Input.setValue('2')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('3')

        const sumOperationButton= wrapper.find("button[name='+']")
        await sumOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })
    it('Test subtract operation', async ()=>{
        
        const wrapper = mount(Calculator)

        const operand1Input= wrapper.find('input[name=operand1]')
        await  operand1Input.setValue('3')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('2')

        const sumOperationButton= wrapper.find("button[name='-']")
        await sumOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })
    it('Test multiply operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('3')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('2')

        const sumOperationButton= wrapper.find("button[name='*']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.vm.result).toBe(6)
    })
    it('Test divide operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('6')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('2')

        const sumOperationButton= wrapper.find("button[name='/']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.vm.result).toBe(3)
    })
    it('Test divide for zero operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('6')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('0')

        const sumOperationButton= wrapper.find("button[name='/']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.find('.error').text()).toBe('Ошибка: На 0 делить нельзя!')
    })
    it('Test pow operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('3')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('2')

        const sumOperationButton= wrapper.find("button[name='a^b']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.vm.result).toBe(9)
    })
    it('Test floor operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('3')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('2')

        const sumOperationButton= wrapper.find("button[name='floor']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.vm.result).toBe(1)
    })
    it('Test floor for zero operation', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input= wrapper.find('input[name=operand1]')
        await operand1Input.setValue('6')

        const operand2Input= wrapper.find('input[name=operand2]')
        await operand2Input.setValue('0')

        const sumOperationButton= wrapper.find("button[name='floor']")
        
        await sumOperationButton.trigger('click')
         expect(wrapper.find('.error').text()).toBe('Ошибка: На 0 делить нельзя!')
    })
})
describe("Calculator keyboard tests",()=>{
    it("Test change number operand1",async()=>{
        const wrapper= mount(Calculator)
         wrapper.vm.checked=true
         const key1= wrapper.find('button[name="1"]')
         wrapper.vm.picked= 'operand1'
        await key1.trigger('click')

         expect(wrapper.vm.operand1).toBe(1)
    })
    it("Test change number operand2",async()=>{
        const wrapper= mount(Calculator)
         wrapper.vm.checked=true
         const key1= wrapper.find('button[name="1"]')
         wrapper.vm.picked= 'operand2'
        await key1.trigger('click')

         expect(wrapper.vm.operand2).toBe(1)
    })
    it("Test change erase operand1",async()=>{
        const wrapper= mount(Calculator)
         wrapper.vm.checked=true
         const operand1= wrapper.find('input[name=operand1]')
         operand1.setValue('11')
         const eraseButton= wrapper.find('button.erase')
         wrapper.vm.picked= 'operand1'
        await eraseButton.trigger('click')

         expect(wrapper.vm.operand1).toBe(1)
    })
    it("Test change erase operand2",async()=>{
        const wrapper= mount(Calculator)
         wrapper.vm.checked=true
         const operand1= wrapper.find('input[name=operand2]')
         operand1.setValue('11')
         const eraseButton= wrapper.find('button.erase')
         wrapper.vm.picked= 'operand2'
        await eraseButton.trigger('click')

         expect(wrapper.vm.operand2).toBe(1)
    })
})