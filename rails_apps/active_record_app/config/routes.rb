Rails.application.routes.draw do

root 'movies#index'

get 'movies/index'

get 'movies/show/:id' => 'movies#show'

get 'movies/new'

get 'movies/create'

get 'movies/edit'

get 'movies/edit'

get 'movies/update'

get 'movies/destroy'

end
