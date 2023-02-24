import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    onChangeSearchInput,
    onEnterSearchInput,
    onClearFilters,
  } = props

  const onSearchInput = event => {
    onChangeSearchInput(event.target.value)
  }

  const onClickEnterSearchInput = event => {
    if (event.key === 'Enter') {
      onEnterSearchInput()
    }
  }

  const renderCategoryList = () => {
    const {onChangeCategory, activeCategoryId} = props
    return (
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(category => {
            const {name, categoryId} = category
            const onClickCategory = () => onChangeCategory(categoryId)
            const categoryNameClassName =
              activeCategoryId === categoryId
                ? 'active-category-name'
                : 'category-name'
            return (
              <li
                className="category-item"
                key={categoryId}
                onClick={onClickCategory}
              >
                <p className={categoryNameClassName}>{name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderRatingList = () => {
    const {onChangeRating, activeRatingId} = props

    return (
      <div>
        <h1>Rating</h1>
        <ul className="rating-list">
          {ratingsList.map(rating => {
            const {imageUrl, ratingId} = rating
            const onClickRating = () => onChangeRating(ratingId)
            const ratingHintClassName =
              activeRatingId === ratingId ? 'active-rating-hint' : 'rating-hint'
            return (
              <li
                className="rating-item"
                key={ratingId}
                onClick={onClickRating}
              >
                <img
                  className="rating-img"
                  src={imageUrl}
                  alt={`rating ${ratingId}`}
                />
                <p className={ratingHintClassName}>& up</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const onClearFiltersBtn = () => {
    onClearFilters()
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-input-container">
        <input
          className="search-input"
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={onSearchInput}
          onKeyDown={onClickEnterSearchInput}
        />
        <BsSearch />
      </div>
      {renderCategoryList()}
      {renderRatingList()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={onClearFiltersBtn}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
