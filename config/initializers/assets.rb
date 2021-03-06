# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( search.js )


Rails.application.config.assets.precompile += %w( utilities.js )
Rails.application.config.assets.precompile += %w( home.js )
Rails.application.config.assets.precompile += %w( categoria.js )
Rails.application.config.assets.precompile += %w( product.js )
# Rails.application.config.assets.precompile += %w( profiles.js )
# Rails.application.config.assets.precompile += %w( cart.js )

Rails.application.config.assets.precompile += %w( product.css )
Rails.application.config.assets.precompile += %w( categoria.css )

# Rails.application.config.assets.precompile += %w( admin.js )
# Rails.application.config.assets.precompile += %w( product_description.js )
# Rails.application.config.assets.precompile += %w( review.js )
Rails.application.config.assets.precompile += %w( external/star-rating.min.js )
Rails.application.config.assets.precompile += %w( external/star-rating.css )

# Rails.application.config.assets.precompile += %w( encomenda.js )

# Rails.application.config.assets.precompile += %w( search.js )