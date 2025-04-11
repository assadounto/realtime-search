
import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
    static targets = ["form"]
  search() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.element.requestSubmit()
    }, 1000)
  }

  clearSearch() {
   
    const url = new URL(window.location.href)
    url.searchParams.delete('search') 
    Turbo.visit(url.toString(), { action: 'replace' })
    this.formTarget.reset()
  }
}