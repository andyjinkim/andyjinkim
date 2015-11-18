Rails.application.routes.draw do

  root 'users#index'

  get 'about' => 'static_pages#about'

  get 'static_pages/faq'

  get 'static_pages/contact'

  get '/users/:id' => 'users#show'

end
