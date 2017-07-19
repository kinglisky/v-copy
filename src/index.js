const HIDDEN_INPUT = document.createElement('textarea')
HIDDEN_INPUT.style.position = 'fixed'
HIDDEN_INPUT.style.top = '-1000px'
document.body.appendChild(HIDDEN_INPUT)

const DEFAULT_OPTIONS = {
  name: 'copy',
  success: function () {
    alert('copy success')
  },
  failure: function () {
    alert('copy failure')
  },
  formater: function (v) {
    return String(v)
  }
}

export default {
  install: function (Vue, options) {
    options = Object.assign({}, DEFAULT_OPTIONS, options)
    Vue.directive(options.name, {
      bind: function (el, binding) {
        el._copyValue = options.formater && options.formater(binding.value)
        el._copyHandler = function copyHandler () {
          if (!HIDDEN_INPUT || !HIDDEN_INPUT.select) return
          HIDDEN_INPUT.value = el._copyValue
          HIDDEN_INPUT.focus()
          HIDDEN_INPUT.select()
          if (document.execCommand('copy')) {
            options.success && options.success()
          } else {
            options.failure && options.failure()
          }
          HIDDEN_INPUT.blur()
          HIDDEN_INPUT.value = ''
        }
        el.addEventListener('click', el._copyHandler)
      },

      update: function (el, binding) {
        el._copyValue = options.formater && options.formater(binding.value)
      },

      unbind: function (el) {
        el.removeEventListener('click', el._copyHandler)
        delete el._copyHandler
        delete el._copyValue
      }
    })
  }
}
