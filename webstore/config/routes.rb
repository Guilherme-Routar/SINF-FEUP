SinfWebstore::Application.routes.draw do
  resources :books

  devise_for :users
  root 'pages#home'
  get 'pesquisa' => 'search#index'
  get 'dashboard' => 'pages#dashboard'
  get 'categoria/:id' => 'categoria#index', :id => /.*/
<<<<<<< HEAD
  get 'product/:id' => 'product#show', :id => /.*/

  delete 'product_description/:id' => 'product_description#destroy'
  put 'product_description' => 'product_description#create'

  post 'reviews' => 'review#create'
  delete 'review/:id' => 'review#destroy'
=======
>>>>>>> 52be9f2e6e93b0af70775277c5823de5e5edbd3a
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
