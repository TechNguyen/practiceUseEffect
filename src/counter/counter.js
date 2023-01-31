import classNames from 'classnames/bind'
import Style from './counter.module.scss'
import { useState, useEffect } from 'react'
const cx = classNames.bind(Style)
const tabs = ['posts', 'comments', 'albums']
function Counter() {
    const [prop, setProp] = useState([])
    const [type, setType] = useState('posts')
    const [value, setValue] = useState('title')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((prop) => {
                setProp(prop)
            })
    }, [type]) // <- add empty brackets here
    return (
        <div className={cx('multiple-choice')}>
            <button>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        style={
                            type === tab
                                ? {
                                      color: '#eee',
                                      backgroundColor: '#333',
                                  }
                                : {}
                        }
                        onClick={() => {
                            if (tab === 'post') {
                                setType(tab)
                                setValue('title')
                            } else if (tab === 'comments') {
                                setType(tab)
                                setValue('email')
                            } else {
                                setType(tab)
                                setValue('title')
                            }
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </button>

            <div>
                {prop.map((item) => (
                    <li key={item.id}>{item[`${value}`]}</li>
                ))}
            </div>
        </div>
    )
}

export default Counter
