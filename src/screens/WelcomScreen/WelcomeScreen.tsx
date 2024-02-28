import css from './WelcomeScreen.module.css'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {MenuInput} from '../../components/MenuInput/MenuInput.tsx'
import {MenuSelect} from '../../components/MenuSelect/MenuSelect.tsx'
import {useNavigate} from 'react-router-dom'
import React, {useEffect, useState, useRef, useContext} from 'react'
import {motion} from 'framer-motion'
import {AppContext} from '../../context/context.tsx'
import {FormValues} from '../../interface/interfarce.ts'
import {difficultyData, typeData, timeData, anyCategory} from '../../mockdata/mockdata.ts'
import {сlearLink} from '../../utils/сlearLink.ts'
import {setResult} from '../../redux/settingsSlice.ts'
import {useDispatch} from 'react-redux'
import axios from 'axios'

export const WelcomeScreen: React.FC = () => {
  const refCategory = useRef<HTMLSelectElement>()
  const refDifficulty = useRef<HTMLSelectElement>()
  const refType = useRef<HTMLSelectElement>()
  const refTime = useRef<HTMLSelectElement>()
  const refNumber = useRef<HTMLInputElement | undefined>()
  const [categories, setCategories] = useState([])
  const [formValues, setFormValues] = useState<FormValues>({
    category: {value: '', name: ''},
    difficulty: '',
    type: '',
    time: '',
    number: '',
  })
  const context = useContext(AppContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleStartButton = () => {
    dispatch(setResult(formValues))
    setTimeout(() => {
      navigate('/game')
    }, 1000)
  }
  const handleStatButton = () => {
    navigate('/statistics')
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = e => {
    if (e.target.name === 'category') {
      // @ts-ignore
      setFormValues((prevValues: Partial<{[key: string]: string}>) => ({
        ...prevValues,
        [e.target.name]: {
          value: e.target.value,
          // @ts-ignore
          name: e.target.options[e.target.selectedIndex].innerText,
        },
      }))
    } else {
      // @ts-ignore
      setFormValues((prevValues: Partial<{[key: string]: string}>) => ({
        ...prevValues,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const getCategory = async () => {
    try {
      const getData = await axios.get('https://opentdb.com/api_category.php')
      const data = getData.data.trivia_categories
      setCategories(data.concat(anyCategory).reverse())
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    let link = сlearLink(
      `https://opentdb.com/api.php?amount=${formValues.number}&category=${formValues.category.value}&difficulty=${formValues.difficulty}&type=${formValues.type}`
    )

    context!.setLink!(link)
  }, [formValues])
  useEffect(() => {
    getCategory()
    setTimeout(() => {
      setFormValues({
        category: {
          value: refCategory.current?.value || '',
          name: refCategory.current?.options[refCategory.current?.selectedIndex].innerText || '',
        },
        difficulty: refDifficulty.current?.value || '',
        type: refType.current?.value || '',
        time: refTime.current?.value || '',
        number: refNumber.current?.value || '',
      })
    }, 1000)
  }, [])
  console.log(formValues)
  return (
    <div className={css.main_page}>
      <motion.h1 className={css.main_header} whileHover={{scale: 1.1}}>
        Virtual Quiz
      </motion.h1>
      <div className={css.select_menu}>
        <MenuSelect
          ref={refCategory as React.Ref<HTMLSelectElement>}
          name="category"
          handleChange={handleChange}
          labelText={'Select Category:'}
          array={categories}
        />
        <MenuSelect
          ref={refDifficulty as React.Ref<HTMLSelectElement>}
          name="difficulty"
          handleChange={handleChange}
          labelText={'Select Difficulty:'}
          array={difficultyData}
        />
        <MenuSelect
          ref={refType as React.Ref<HTMLSelectElement>}
          name="type"
          handleChange={handleChange}
          labelText={'Select Type:'}
          array={typeData}
        />
        <MenuSelect
          ref={refTime as React.Ref<HTMLSelectElement>}
          name="time"
          handleChange={handleChange}
          labelText={'Select Time:'}
          array={timeData}
        />
        <MenuInput
          name="number"
          ref={refNumber as React.Ref<HTMLInputElement>}
          value={formValues.number.toString()}
          handleChange={handleChange}
        />
      </div>
      <div className={css.controls}>
        <MenuButton handleButton={handleStartButton} text="Start quiz" />
        <MenuButton handleButton={handleStatButton} text="See my statistics" />
      </div>
    </div>
  )
}
