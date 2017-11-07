class Api::Book < ActiveRecord::Base

  PERMITTED_ATTRIBUTES = %i(author name price)
end
