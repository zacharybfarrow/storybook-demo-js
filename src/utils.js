export function cx(values) {
    if (values.length === 0) return values[0]
    return values.join(' ').trimEnd()
  }