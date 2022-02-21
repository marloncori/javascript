// Bardzo dobry przykład który pokazuje czemu "Promise" są ważne :)

fetchCurrentUser("api/user", function(result) {
   fetchFollowersByUserId("api/followers/${result.userId}", function(result) {
      fetchFollowerInterests("api/interests/${result.followerId}", function(result) {
        fetchInterestTags("api/tags/${result.interstId}", function(result) {
          fetchTagDescription("api/description/${result.tagId}", function(result) {
               //pokaż w końcu oczekiwane dane...
          })
        })
      })
    })
 })

//Lepsze i bardziej czytelne rozwiązanie:

const promise = fetchCurrentUser("api/user")
  promise
     .then(result => fetchFollowersByUserId("api/followers/${result.userId}"))
      .then(result => fetchFollowerInterests("api/interests/${result.followerId}"))
        .then(result => fetchInterestTags("api/tags/${result.interstId}"))
          .then(result => fetchTagDescription("api/description/${result.tagId}"))

