import {useSelector} from 'react-redux'
import {selectQuestions} from '../../redux/statisticsSlice.ts'
import css from '../StatisticScreen/StatisticScreen.module.css'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {useNavigate} from 'react-router-dom'

export const StatisticScreen = () => {
  const statisticSelector = useSelector(selectQuestions)
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate('/')
  }
  return (
    <>
      <div className={css.statistic_page}>
        <p>{`Total correct questions ${statisticSelector.correctQuestions}`}</p>
        <p>{`Total answered questions ${statisticSelector.totalQuestions}`}</p>
        <div>
          <h4>Categories:</h4>
          {statisticSelector.categoryQuestions.map(item => (
            <p key={item.category}>{`Category:  ${item.category}, questions ${item.number}`}</p>
          ))}
        </div>
        <div>
          <h4>Difficulties:</h4>
          {statisticSelector.difficultyQuestions.map(item => (
            <p
              key={
                item.difficulty
              }>{`Difficulty:  ${item.difficulty}, questions ${item.number}`}</p>
          ))}
        </div>
        <div>
          <h4>Types:</h4>
          {statisticSelector.typeQuestions.map(item => (
            <p key={item.type}>{`Type:  ${item.type}, questions ${item.number}`}</p>
          ))}
        </div>
        <MenuButton text={'Back to main menu'} handleButton={handleBackButton} />
      </div>
    </>
  )
}
