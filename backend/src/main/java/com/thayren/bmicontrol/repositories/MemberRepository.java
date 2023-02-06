package com.thayren.bmicontrol.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thayren.bmicontrol.entities.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	
	@Query("select mem from Member mem where mem.name like %?1%")
	Page<Member> find(String name, Pageable pageable);

}
