// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"


import SearchFormController from "controllers/search_form_controller";


application.register("search-form", SearchFormController);
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";

eagerLoadControllersFrom("controllers", application);