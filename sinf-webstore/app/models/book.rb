class Book < ActiveRecord::Base

	belongs_to :user
	has_attached_file :image
	has_attached_file :resource

	def self.search(search)
		if search
			@books = Book.where(["name LIKE ?","%#{search}%"])
		else
			all
		end
	end
end
