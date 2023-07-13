// Supposons que vous ayez une variable "content" qui contient vos données indexées
var content = [
    {
      title: "Titre 1",
      content: "Contenu 1"
    },
    {
      title: "Titre 2",
      content: "Contenu 2"
    },
    // Ajoutez vos autres données indexées ici
  ];
  
  var searchIndex; // Variable pour stocker l'index de recherche
  
  function buildSearchIndex() {
    // Créez un nouvel index de recherche
    searchIndex = lunr(function () {
      this.ref('title'); // Champ de référence utilisé pour identifier chaque document
      this.field('title'); // Champ à indexer pour la recherche
      this.field('content'); // Champ à indexer pour la recherche
  
      // Parcourez vos données indexées et ajoutez-les à l'index
      for (var i = 0; i < content.length; i++) {
        this.add(content[i]);
      }
    });
  }
  
  function performSearch(query) {
    var results = searchIndex.search(query); // Effectue la recherche dans l'index
  
    // Traitez les résultats de recherche (par exemple, affichez-les dans une liste)
    displaySearchResults(results);
  }
  
  function displaySearchResults(results) {
    var resultList = document.getElementById('search-results');
    resultList.innerHTML = ''; // Effacez les résultats précédents
  
    if (results.length === 0) {
      var noResultsItem = document.createElement('li');
      noResultsItem.textContent = 'Aucun résultat trouvé.';
      resultList.appendChild(noResultsItem);
    } else {
      for (var i = 0; i < results.length; i++) {
        var resultItem = document.createElement('li');
        resultItem.textContent = results[i].ref; // Utilisez la référence pour afficher les résultats pertinents
        resultList.appendChild(resultItem);
      }
    }
  }
  
  var searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value;
    performSearch(query);
  });
  
  // Construisez l'index de recherche au chargement de la page
  buildSearchIndex();
  
  