function displayFilterData() {
  const industry1 = $('#industry1-selectize option:selected').text();
  const industry2 = $('#industry2-selectize option:selected').text() === "" ? "undefined" : $('#industry2-selectize option:selected').text();
  const purpose = $('#purpose-selectize option:selected').text();
  const test = $('#test-selectize option:selected').text();

  // Reset scores
  nationalOverallScores = {};
  nationalPartScores = {};

  const filterResult = filterData[industry1]?.[industry2]?.[purpose]?.[test];
  if (!isEmptyObject(filterResult)) {
    for (const [key, value] of Object.entries(filterResult)) {
      const mainCategoryMatch = key.match(/\[([A-F])\]/);
      const subCategoryMatch = key.match(/\[([A-F]\d+)\]/);
      if (mainCategoryMatch) {
        const category = mainCategoryMatch[1];
        if (key.includes(`[${category}]`)) {
          if (!nationalOverallScores[category]) {
            nationalOverallScores[category] = 0;
          }
          nationalOverallScores[category] = parseFloat(value.toFixed(1) || 0);
        }
      }
      if (subCategoryMatch) {
        const category = subCategoryMatch[1][0]; // Get the main category letter
        const subcategory = subCategoryMatch[1];
        if (!nationalPartScores[category]) {
          nationalPartScores[category] = {};
        }
        nationalPartScores[category][subcategory] = parseFloat(value.toFixed(1) || 0);
      }
    }
  } else {
    nationalOverallScores = {}
    nationalPartScores = {}
  }
  updateAllData()
}