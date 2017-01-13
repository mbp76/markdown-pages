import spock.lang.*

class WebPagesSpec extends Specification {
  def "at least the index source should exist"() {
    expect:
      new File('src/index.md').exists()
  }
}
