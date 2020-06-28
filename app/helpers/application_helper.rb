module ApplicationHelper
  FLASH_KEYS = Hash.new { |h, k| h[k] = k }
  FLASH_KEYS['notice'] = :info
  FLASH_KEYS['alert'] = :danger

  def nav_link_class(path)
    current_page?(path) ? 'nav-link active' : 'nav-link'
  end

  def flash_key(key)
    FLASH_KEYS[key.to_s]
  end
end
